import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent714Component } from './test-component714.component';

describe('TestComponent714Component', () => {
  let component: TestComponent714Component;
  let fixture: ComponentFixture<TestComponent714Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent714Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

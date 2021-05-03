import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent728Component } from './test-component728.component';

describe('TestComponent728Component', () => {
  let component: TestComponent728Component;
  let fixture: ComponentFixture<TestComponent728Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent728Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

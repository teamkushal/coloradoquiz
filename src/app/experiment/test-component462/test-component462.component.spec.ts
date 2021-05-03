import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent462Component } from './test-component462.component';

describe('TestComponent462Component', () => {
  let component: TestComponent462Component;
  let fixture: ComponentFixture<TestComponent462Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent462Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

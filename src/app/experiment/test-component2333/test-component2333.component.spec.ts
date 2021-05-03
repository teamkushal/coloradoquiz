import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2333Component } from './test-component2333.component';

describe('TestComponent2333Component', () => {
  let component: TestComponent2333Component;
  let fixture: ComponentFixture<TestComponent2333Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2333Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2838Component } from './test-component2838.component';

describe('TestComponent2838Component', () => {
  let component: TestComponent2838Component;
  let fixture: ComponentFixture<TestComponent2838Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2838Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2410Component } from './test-component2410.component';

describe('TestComponent2410Component', () => {
  let component: TestComponent2410Component;
  let fixture: ComponentFixture<TestComponent2410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2410Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

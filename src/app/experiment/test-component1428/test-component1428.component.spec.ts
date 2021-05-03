import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1428Component } from './test-component1428.component';

describe('TestComponent1428Component', () => {
  let component: TestComponent1428Component;
  let fixture: ComponentFixture<TestComponent1428Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1428Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

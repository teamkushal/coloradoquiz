import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2428Component } from './test-component2428.component';

describe('TestComponent2428Component', () => {
  let component: TestComponent2428Component;
  let fixture: ComponentFixture<TestComponent2428Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2428Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

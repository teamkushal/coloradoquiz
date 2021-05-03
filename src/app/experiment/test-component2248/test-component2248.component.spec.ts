import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2248Component } from './test-component2248.component';

describe('TestComponent2248Component', () => {
  let component: TestComponent2248Component;
  let fixture: ComponentFixture<TestComponent2248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2248Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

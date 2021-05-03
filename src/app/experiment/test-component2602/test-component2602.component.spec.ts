import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2602Component } from './test-component2602.component';

describe('TestComponent2602Component', () => {
  let component: TestComponent2602Component;
  let fixture: ComponentFixture<TestComponent2602Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2602Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

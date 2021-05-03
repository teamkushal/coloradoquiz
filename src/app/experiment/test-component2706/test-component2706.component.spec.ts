import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2706Component } from './test-component2706.component';

describe('TestComponent2706Component', () => {
  let component: TestComponent2706Component;
  let fixture: ComponentFixture<TestComponent2706Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2706Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

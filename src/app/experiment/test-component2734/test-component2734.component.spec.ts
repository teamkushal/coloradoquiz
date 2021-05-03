import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2734Component } from './test-component2734.component';

describe('TestComponent2734Component', () => {
  let component: TestComponent2734Component;
  let fixture: ComponentFixture<TestComponent2734Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2734Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2625Component } from './test-component2625.component';

describe('TestComponent2625Component', () => {
  let component: TestComponent2625Component;
  let fixture: ComponentFixture<TestComponent2625Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2625Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

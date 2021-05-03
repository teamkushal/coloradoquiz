import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2489Component } from './test-component2489.component';

describe('TestComponent2489Component', () => {
  let component: TestComponent2489Component;
  let fixture: ComponentFixture<TestComponent2489Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2489Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

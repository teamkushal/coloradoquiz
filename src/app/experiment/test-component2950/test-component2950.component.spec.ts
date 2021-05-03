import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2950Component } from './test-component2950.component';

describe('TestComponent2950Component', () => {
  let component: TestComponent2950Component;
  let fixture: ComponentFixture<TestComponent2950Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2950Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

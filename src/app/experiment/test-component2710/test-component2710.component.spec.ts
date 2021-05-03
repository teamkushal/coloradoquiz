import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2710Component } from './test-component2710.component';

describe('TestComponent2710Component', () => {
  let component: TestComponent2710Component;
  let fixture: ComponentFixture<TestComponent2710Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2710Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

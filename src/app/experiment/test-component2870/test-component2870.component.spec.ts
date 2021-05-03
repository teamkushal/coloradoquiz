import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2870Component } from './test-component2870.component';

describe('TestComponent2870Component', () => {
  let component: TestComponent2870Component;
  let fixture: ComponentFixture<TestComponent2870Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2870Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

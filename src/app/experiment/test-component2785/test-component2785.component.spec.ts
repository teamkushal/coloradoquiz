import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2785Component } from './test-component2785.component';

describe('TestComponent2785Component', () => {
  let component: TestComponent2785Component;
  let fixture: ComponentFixture<TestComponent2785Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2785Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

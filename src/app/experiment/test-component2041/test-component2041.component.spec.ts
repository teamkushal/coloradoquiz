import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2041Component } from './test-component2041.component';

describe('TestComponent2041Component', () => {
  let component: TestComponent2041Component;
  let fixture: ComponentFixture<TestComponent2041Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2041Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

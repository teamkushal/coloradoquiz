import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2963Component } from './test-component2963.component';

describe('TestComponent2963Component', () => {
  let component: TestComponent2963Component;
  let fixture: ComponentFixture<TestComponent2963Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2963Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

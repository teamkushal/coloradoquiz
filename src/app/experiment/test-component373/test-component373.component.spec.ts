import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent373Component } from './test-component373.component';

describe('TestComponent373Component', () => {
  let component: TestComponent373Component;
  let fixture: ComponentFixture<TestComponent373Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent373Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

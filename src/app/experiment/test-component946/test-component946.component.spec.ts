import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent946Component } from './test-component946.component';

describe('TestComponent946Component', () => {
  let component: TestComponent946Component;
  let fixture: ComponentFixture<TestComponent946Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent946Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1112Component } from './test-component1112.component';

describe('TestComponent1112Component', () => {
  let component: TestComponent1112Component;
  let fixture: ComponentFixture<TestComponent1112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

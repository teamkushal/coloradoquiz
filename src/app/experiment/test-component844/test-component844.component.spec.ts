import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent844Component } from './test-component844.component';

describe('TestComponent844Component', () => {
  let component: TestComponent844Component;
  let fixture: ComponentFixture<TestComponent844Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent844Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2182Component } from './test-component2182.component';

describe('TestComponent2182Component', () => {
  let component: TestComponent2182Component;
  let fixture: ComponentFixture<TestComponent2182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

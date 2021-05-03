import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2855Component } from './test-component2855.component';

describe('TestComponent2855Component', () => {
  let component: TestComponent2855Component;
  let fixture: ComponentFixture<TestComponent2855Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2855Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

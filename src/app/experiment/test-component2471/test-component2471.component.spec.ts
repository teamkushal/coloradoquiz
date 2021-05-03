import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2471Component } from './test-component2471.component';

describe('TestComponent2471Component', () => {
  let component: TestComponent2471Component;
  let fixture: ComponentFixture<TestComponent2471Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2471Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

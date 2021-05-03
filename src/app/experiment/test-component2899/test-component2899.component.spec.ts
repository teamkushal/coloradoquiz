import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2899Component } from './test-component2899.component';

describe('TestComponent2899Component', () => {
  let component: TestComponent2899Component;
  let fixture: ComponentFixture<TestComponent2899Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2899Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent857Component } from './test-component857.component';

describe('TestComponent857Component', () => {
  let component: TestComponent857Component;
  let fixture: ComponentFixture<TestComponent857Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent857Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

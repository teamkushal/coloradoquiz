import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent719Component } from './test-component719.component';

describe('TestComponent719Component', () => {
  let component: TestComponent719Component;
  let fixture: ComponentFixture<TestComponent719Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent719Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

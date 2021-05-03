import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent248Component } from './test-component248.component';

describe('TestComponent248Component', () => {
  let component: TestComponent248Component;
  let fixture: ComponentFixture<TestComponent248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent248Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

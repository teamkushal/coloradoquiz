import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3408Component } from './test-component3408.component';

describe('TestComponent3408Component', () => {
  let component: TestComponent3408Component;
  let fixture: ComponentFixture<TestComponent3408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3408Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

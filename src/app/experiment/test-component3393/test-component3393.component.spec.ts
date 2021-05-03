import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3393Component } from './test-component3393.component';

describe('TestComponent3393Component', () => {
  let component: TestComponent3393Component;
  let fixture: ComponentFixture<TestComponent3393Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3393Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3175Component } from './test-component3175.component';

describe('TestComponent3175Component', () => {
  let component: TestComponent3175Component;
  let fixture: ComponentFixture<TestComponent3175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

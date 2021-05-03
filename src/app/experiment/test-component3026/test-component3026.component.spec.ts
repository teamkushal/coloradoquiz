import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3026Component } from './test-component3026.component';

describe('TestComponent3026Component', () => {
  let component: TestComponent3026Component;
  let fixture: ComponentFixture<TestComponent3026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3026Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

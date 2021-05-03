import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3133Component } from './test-component3133.component';

describe('TestComponent3133Component', () => {
  let component: TestComponent3133Component;
  let fixture: ComponentFixture<TestComponent3133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

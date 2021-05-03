import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3180Component } from './test-component3180.component';

describe('TestComponent3180Component', () => {
  let component: TestComponent3180Component;
  let fixture: ComponentFixture<TestComponent3180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

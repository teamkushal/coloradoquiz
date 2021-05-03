import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3288Component } from './test-component3288.component';

describe('TestComponent3288Component', () => {
  let component: TestComponent3288Component;
  let fixture: ComponentFixture<TestComponent3288Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3288Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

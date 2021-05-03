import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3354Component } from './test-component3354.component';

describe('TestComponent3354Component', () => {
  let component: TestComponent3354Component;
  let fixture: ComponentFixture<TestComponent3354Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3354Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

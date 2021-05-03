import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3580Component } from './test-component3580.component';

describe('TestComponent3580Component', () => {
  let component: TestComponent3580Component;
  let fixture: ComponentFixture<TestComponent3580Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3580Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

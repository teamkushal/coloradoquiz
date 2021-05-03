import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3862Component } from './test-component3862.component';

describe('TestComponent3862Component', () => {
  let component: TestComponent3862Component;
  let fixture: ComponentFixture<TestComponent3862Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3862Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

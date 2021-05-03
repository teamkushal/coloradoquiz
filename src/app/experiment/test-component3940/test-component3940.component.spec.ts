import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3940Component } from './test-component3940.component';

describe('TestComponent3940Component', () => {
  let component: TestComponent3940Component;
  let fixture: ComponentFixture<TestComponent3940Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3940Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

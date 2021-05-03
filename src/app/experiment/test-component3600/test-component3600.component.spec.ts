import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3600Component } from './test-component3600.component';

describe('TestComponent3600Component', () => {
  let component: TestComponent3600Component;
  let fixture: ComponentFixture<TestComponent3600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

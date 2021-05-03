import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1493Component } from './test-component1493.component';

describe('TestComponent1493Component', () => {
  let component: TestComponent1493Component;
  let fixture: ComponentFixture<TestComponent1493Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1493Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

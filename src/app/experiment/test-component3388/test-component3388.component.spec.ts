import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3388Component } from './test-component3388.component';

describe('TestComponent3388Component', () => {
  let component: TestComponent3388Component;
  let fixture: ComponentFixture<TestComponent3388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3388Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

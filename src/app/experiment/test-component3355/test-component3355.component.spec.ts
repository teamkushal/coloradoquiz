import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3355Component } from './test-component3355.component';

describe('TestComponent3355Component', () => {
  let component: TestComponent3355Component;
  let fixture: ComponentFixture<TestComponent3355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3355Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

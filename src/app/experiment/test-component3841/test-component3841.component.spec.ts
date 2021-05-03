import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3841Component } from './test-component3841.component';

describe('TestComponent3841Component', () => {
  let component: TestComponent3841Component;
  let fixture: ComponentFixture<TestComponent3841Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3841Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

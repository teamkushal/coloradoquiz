import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3991Component } from './test-component3991.component';

describe('TestComponent3991Component', () => {
  let component: TestComponent3991Component;
  let fixture: ComponentFixture<TestComponent3991Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3991Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

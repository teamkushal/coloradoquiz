import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3159Component } from './test-component3159.component';

describe('TestComponent3159Component', () => {
  let component: TestComponent3159Component;
  let fixture: ComponentFixture<TestComponent3159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

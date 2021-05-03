import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3771Component } from './test-component3771.component';

describe('TestComponent3771Component', () => {
  let component: TestComponent3771Component;
  let fixture: ComponentFixture<TestComponent3771Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3771Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

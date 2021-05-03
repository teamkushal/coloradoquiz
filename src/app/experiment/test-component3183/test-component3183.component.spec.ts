import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3183Component } from './test-component3183.component';

describe('TestComponent3183Component', () => {
  let component: TestComponent3183Component;
  let fixture: ComponentFixture<TestComponent3183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

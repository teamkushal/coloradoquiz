import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent244Component } from './test-component244.component';

describe('TestComponent244Component', () => {
  let component: TestComponent244Component;
  let fixture: ComponentFixture<TestComponent244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent244Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

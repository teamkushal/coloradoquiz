import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent991Component } from './test-component991.component';

describe('TestComponent991Component', () => {
  let component: TestComponent991Component;
  let fixture: ComponentFixture<TestComponent991Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent991Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
